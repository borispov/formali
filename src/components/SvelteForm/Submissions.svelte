<script lang="ts">
    let { data } = $props();

    let values = $state([]);

    const icons = {
      signature: 'signature-freehand',
      text: 'format-text',
      rating: 'star',
      phone: 'phone',
      email: 'email-outline',
      scale: 'numbers-line',
      select: 'selection'
    }

    for (const entry of data) {
        var tmp = [];
        for (const sub of entry.submissionData) {
            tmp.push(sub.value);
        }
        tmp.push(entry.created.split(" ")[0]);
        values.push(tmp);
    }

    const heads = 
      data && data[0].submissionData
        .map(({type, question }) => ({ type, question }))

        console.log(heads)

    const QUESTIONS = {
        signature: "חתימה",
    };

    // basically we check if answer is a Signature...
    function isDataUrl(value: string) {
      if (typeof value !== 'string') return false
      return value.includes('base64') || value.includes('data:image')
    }
</script>

<div class="my-2">
    <div class="flex justify-between">
      <h1 class="font-bold">
        תוצאות ותגובות עבור הטופס
      </h1>
      <button class="btn btn-sm btn-secondary">הורד הכל</button>
    </div>
    <div class="inline-block min-w-full py-2 align-middle">
        <div
            class="overflow-auto md:rounded-lg relative" >
            <table
                class="table w-auto break-words"
            >
                <thead class="bg-gray-100">
                    <tr class="divide-x divide-gray-200">
                        {#each heads as head}
                            <th class="text-right text-sm text-gray-600 font-normal">
                              <div class="items-center flex gap-2 flex-nowrap">
                                <div class="w-6 h-6 bg-neutral-200 rounded-md flex items-center justify-center">
                                  <div class="i-mdi:{icons[head.type]} w-4 h-4 bg-neutral-500 rounded-lg"></div>
                                </div>
                                  {head.question}
                              </div>
                            </th>
                        {/each}
                        <th class="flex gap-2 items-center text-right text-sm text-gray-600 font-normal">
                            <div class="w-7 h-7 bg-neutral-200 rounded-md flex items-center justify-center">
                              <div class="i-mdi:clock-outline w-5 h-5 bg-neutral-500 rounded-lg"></div>
                            </div>
                            נוצר ב</th
                        >
                    </tr>
                </thead>

                <tbody class="divide-y divide-gray-200 bg-white" dir="ltr">
                    {#each values as submission}
                        <tr>
                            {#each submission as answer}
                              {#if isDataUrl(answer)}
                                <th class="text-neutral-600 text-right font-thin">
                                  <!-- Perfect Easy To Use Daisy Modal Here, Huurrrayy -->
                                  <label for="my_modal_7">
                                    <img class="w-24 h-12" src={answer} alt="">
                                  </label>

                                  <input type="checkbox" id="my_modal_7" class="modal-toggle" />
                                  <div class="modal" role="dialog">
                                    <div class="modal-box">
                                    <img class="w-full h-60" src={answer} alt="">
                                    </div>
                                    <label class="modal-backdrop" for="my_modal_7">Close</label>
                                  </div>
                                </th>
                              {:else}
                                <th class="text-neutral-600 text-right font-thin">
                                  {answer}
                                </th>
                              {/if}
                            {/each}
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>
