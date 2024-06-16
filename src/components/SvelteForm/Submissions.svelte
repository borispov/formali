<script lang="ts">
    let { data } = $props();

    let values = $state([]);

    for (const entry of data) {
        var tmp = [];
        for (const sub of entry.submissionData) {
            tmp.push(sub.value);
        }
        values.push(tmp);
    }

    const head = data[0].submissionData.map((a) => a.question);

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
                class="table min-w-full divide-y divide-gray-300 break-words"
            >
                <thead class="bg-gray-100">
                    <tr class="divide-x divide-gray-200">
                        {#each head as question}
                            <th
                                class="py-3 5 pr-4 text-right text-sm font-semibold text-gray-900"
                            >
                                {question}
                            </th>
                        {/each}
                    </tr>
                </thead>

                <tbody class="divide-y divide-gray-200 bg-white" dir="ltr">
                    {#each values as submission}
                        <tr>
                            {#each submission as answer}
                                <th class="text-neutral-600 text-right"
                                    >{answer}</th
                                >
                            {/each}
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>
