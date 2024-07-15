<script>
  import PocketBase from "pocketbase";

  const PB_URL = import.meta.env.PUBLIC_PB_URL || "http://localhost:8090/";
  const pb = new PocketBase(PB_URL);

  let userEmail = $state("");

  if (pb.authStore.isValid) {
    userEmail = pb.authStore.model.email;
    console.log(userEmail);
  }

  let itemsList = [
    {
      priceId: "pri_01j1n7zq79xtwzy44b7tprp5wt",
      quantity: 1,
    },
  ];

  const twClasses = `
    [ rotate-1 text-2xl bg-teal ]
    [ border-2 border-black drop-shadow-3xl hover:drop-shadow-4xl ]
    [ px-10 py-2 text-black rounded-md button-xl ]
  `;

  function openCheckout(_items, _customer) {
    Paddle.Checkout.open({
      items: itemsList,
      customer: {
        email: userEmail,
      },
    });
  }
</script>

<button class={twClasses} on:click={openCheckout}> צור חשבון עכשיו </button>
