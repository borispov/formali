<script lang="ts">
    let { data } = $props();

    console.log(`Here's the data: (stringified) ${JSON.stringify(data)}`);

    let headRow = ``;

    let rows = [];
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
                        <th
                            class="py-3 5 pr-4 text-right text-sm font-semibold text-gray-900"
                        >
                            שם פרטי
                        </th>
                        <th
                            class="py-3 5 pr-4 text-right text-sm font-semibold text-gray-900"
                        >
                            שאלה #2
                        </th>
                        <th
                            class="py-3 5 pr-4 text-right text-sm font-semibold text-gray-900"
                        >
                            שאלה #3
                        </th>
                    </tr>
                </thead>

                <tbody class="divide-y divide-gray-200 bg-white"></tbody>
            </table>
        </div>
    </div>
</div>
