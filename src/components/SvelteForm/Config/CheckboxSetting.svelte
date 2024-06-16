<script lang="ts">
    const premiums = ["redirect"];

    const isPremium = (label: string) => {
        return premiums.includes(label);
    };

    const CONSTANTS = {
        required: {
            label: "שדה חובה",
            description:
                "משתמשים יהיו מחויבים למלא שדה חובה בכדי להשלים את הטופס במלואו.",
        },
        allowInternational: {
            label: "מספרים בינלאומיים",
            description:
                "משתמשים יהיו מחויבים למלא שדה חובה בכדי להשלים את הטופס במלואו.",
        },
    };

    let { setting = $bindable(), type } = $props();
</script>

<div class="mt-8">
    <div class="relative mt-2 flex items-start w-full">
        <div class="flex h-6 items-center">
            <input
                bind:checked={setting}
                type="checkbox"
                name={CONSTANTS[type].label}
                id={CONSTANTS[type].label}
                class="h-4 w-4 rounded border-neutral-300 focus:ring-blue-600 text-blue-600"
            />
        </div>
        <div class="mr-3 text-sm leading-6">
            <label for={CONSTANTS[type].label} class="text-gray-700"
                >{CONSTANTS[type].label}</label
            >
            <p class="text-gray-400">{CONSTANTS[type].description}</p>
        </div>
    </div>
</div>
