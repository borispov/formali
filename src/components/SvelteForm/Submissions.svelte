<script lang="ts">
    let { data } = $props();

    const QUESTIONS = {
        signature: "חתימה",
    };
</script>

<div class="my-2 overflow-auto">
    <div class="inline-block min-w-full py-2 align-middle">
        <div
            class="overflow-auto shadow mx-1 ring-1 ring-black ring-opacity-5 md:rounded-lg relative"
        >
            <table
                class="table table-zebra min-w-full divide-y divide-gray-300 break-words"
            >
                <thead class="bg-gray-100">
                    <tr class="divide-x divide-gray-200">
                        {#each data.submissionData as sub}
                            <th
                                class="py-3 5 pr-4 text-right text-sm font-semibold text-gray-900"
                            >
                                {sub.question}
                            </th>
                        {/each}
                    </tr>
                </thead>

                <tbody class="divide-y divide-gray-200 bg-white">
                    {#each data.submissionData as sub}
                        <tr><th class="text-neutral-600">{sub.value}</th></tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>
