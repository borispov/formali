<script>
    import { Editor } from "@tiptap/core";
    import StarterKit from "@tiptap/starter-kit";
    import Underline from "@tiptap/extension-underline";
    import Link from "@tiptap/extension-link";
    import Focus from "@tiptap/extension-focus";
    import Youtube from "@tiptap/extension-youtube";
    import { onDestroy, onMount } from "svelte";

    let defaultValue = `תאור נועד לפרט ולתת הכוונה רחבה יותר אודות השאלה`;
    let { value = $bindable(defaultValue) } = $props();

    let element = $state();
    let editor = $state();

    let state = $state({
        link: "",
        youtubeLink: "",
        showToolbox: true,
        showLinkInput: false,
        showYoutubeInput: false,
    });

    function handleCancel() {
        state.link = "";
        state.youtubeLink = "";
        state.showToolbox = true;
        state.showLinkInput = false;
        state.showYoutubeInput = false;
        editor.commands.unsetLink();
        editor.commands.unsetYoutubeLink();
    }

    function addLink() {
        editor.commands.setLink({ href: state.link });
        state.showToolbox = true;
        state.showLinkInput = false;
    }

    function addYoutube() {
        editor.commands.setYoutubeVideo({
            src: state.youtubeLink,
            width: 640,
            height: 480,
        });
        state.showYoutubeInput = false;
        state.showToolbox = true;
    }

    function handleYoutubeLink() {
        state.showToolbox = false;
        state.showYoutubeInput = true;
    }

    function handleLink() {
        const prev = editor.getAttributes("link").href;
        if (prev) {
            state.link = prev;
        }
        state.showToolbox = false;
        state.showLinkInput = true;
    }

    onMount(() => {
        editor = new Editor({
            element: element,
            extensions: [
                StarterKit,
                Underline,
                Link.configure({
                    HTMLAttributes: {
                        class: "underline text-blue font-bold cursor-pointer",
                    },
                }),
                Youtube.configure({
                    controls: false,
                }),
            ],
            editorProps: {
                attributes: {
                    class: "prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl p-2 focus:outline-2 outline-gray-600 text-gray-700",
                },
            },
            autofocus: true,
            content: `<p>${value}</p>`,
            onUpdate: ({ editor }) => {
                const html = editor.getHTML();
                value = html;
            },
            onTransaction: () => {
                // force re-render so `editor.isActive` works as expected
                editor = editor;
            },
        });
    });
    onDestroy(() => {
        return () => {
            if (editor) {
                editor.destroy();
            }
        };
    });
</script>

{#if editor}
    <div
        id="toolbox"
        class={`${state.showToolbox ? "flex gap-x-4 space-y-2 items-end" : "hidden"} flex-wrap text-xs bg-gray-100 border border-b-0 border-gray-200 rounded rounded-b-none relative`}
    >
        <div class="text-center">
            <button
                onclick={() => editor.chain().toggleBold().focus().run()}
                class:active={editor.isActive("bold")}
            >
                <div class="i-mdi:format-bold h-6 w-6 text-gray-700"></div>
            </button>
        </div>
        <div class="text-center">
            <button
                onclick={() => editor.chain().toggleItalic().focus().run()}
                class:active={editor.isActive("italic")}
            >
                <div class="i-mdi:format-italic h-6 w-6 text-gray-700"></div>
            </button>
        </div>
        <div class="text-center">
            <button
                onclick={() => editor.chain().toggleUnderline().focus().run()}
                class:active={editor.isActive("underline")}
            >
                <div class="i-mdi:format-underline h-6 w-6 text-gray-700"></div>
            </button>
        </div>

        <div class="text-center">
            <!-- Add Link -->
            <button onclick={handleLink} class:active={editor.isActive("link")}>
                <div class="i-mdi:link-box h-6 w-6 text-gray-700"></div>
            </button>
        </div>

        <!-- Add YoutubeLink -->
        <div class="text-center">
            <button
                onclick={handleYoutubeLink}
                class:active={editor.isActive("youtube")}
            >
                <div class="i-mdi:youtube h-6 w-6 text-gray-700"></div>
            </button>
        </div>
    </div>

    <div
        id="linkInput"
        class={`${state.showLinkInput ? "flex" : "hidden"} items-center p-2 text-xs bg-gray-100 border border-b-0 border-gray-200 rounded rounded-b-none relative`}
    >
        <div class="ml-2 text-center lg:ml-5">
            <div class="flex relative items-center w-full gap-2">
                <input
                    bind:value={state.link}
                    type="text"
                    placeholder="https://wikipedia.org/whatever"
                    class="block w-full mr-4 rounded-md border-o py-1 5 text-gray-800 shadow-md ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
                <button
                    onclick={addLink}
                    class="button-tiny button-secondary text-white border-0"
                    type="submit"
                >
                    <div class="i-mdi:check-outline text-white w-6 h-6"></div>
                </button>
                <button
                    onkeydown={(e) => e.key === "Escape" && handleCancel()}
                    onclick={handleCancel}
                    class="button-tiny button-primary"
                >
                    <div class="i-mdi:cancel w-6 h-6"></div>
                </button>
            </div>
        </div>
    </div>

    <div
        id="youtubeInput"
        class={`${state.showYoutubeInput ? "flex" : "hidden"} items-center p-2 text-xs bg-gray-100 border border-b-0 border-gray-200 rounded rounded-b-none relative`}
    >
        <div class="ml-2 text-center lg:ml-5">
            <div class="flex relative items-center w-full gap-2">
                <input
                    bind:value={state.youtubeLink}
                    type="text"
                    placeholder="https://wikipedia.org/whatever"
                    class="block w-full mr-4 rounded-md border-o py-1 5 text-gray-800 shadow-md ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
                <button
                    onclick={addYoutube}
                    class="button-tiny button-secondary text-white border-0"
                    type="submit"
                >
                    <div class="i-mdi:check-outline text-white w-6 h-6"></div>
                </button>
                <button
                    onkeydown={(e) => e.key === "Escape" && handleCancel()}
                    onclick={handleCancel}
                    class="button-tiny button-primary"
                >
                    <div class="i-mdi:cancel w-6 h-6"></div>
                </button>
            </div>
        </div>
    </div>
{/if}

<div bind:this={element}></div>

<style is:raw>
    button.active {
        background: black;
        color: white;
    }

    .ProseMirror {
        padding: 1rem;
        border: 1px solid #e5e7eb;
        min-height: 5rem;
        border-radius: 0.25rem;
        overflow: auto;
        font-size: 0.9rem;
    }

    iframe {
        border: 8px solid #000;
        border-radius: 4px;
        min-width: 200px;
        min-height: 200px;
        display: block;
        outline: 0px solid transparent;
    }

    div[data-youtube-video] {
        cursor: move;
        padding-right: 24px;
    }

    .ProseMirror-selectednode iframe {
        transition: outline 0.15s;
        outline: 6px solid #ece111;
    }
</style>
