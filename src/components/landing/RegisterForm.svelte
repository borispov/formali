<script>
    import PocketBase from "pocketbase";

    const PB_URL = import.meta.env.PUBLIC_PB_URL || "http://localhost:8090/";
    const pb = new PocketBase(PB_URL);

    let isLoading = $state(false);
    let email = $state("");
    let password = $state("");
    let error = $state("");

    // is this redirect sufficient?
    if (pb.authStore.isValid) {
        window.location.href = "/dashboard";
    }

    $effect(() => {
        if (password && email) {
            error = "";
        }
    });

    async function onGoogleLogin() {
        isLoading = true;
        const authData = await pb
            .collection("users")
            .authWithOAuth2({ provider: "google" });

        const { meta } = authData;

        console.log("name: ", meta.name);

        // User Is New
        if (meta && meta.isNew) {
            console.log("THIS IS A NEW USER");
            const sub = new SubscriptionService();
            await sub.upgradeSubscription(
                authData.record.id,
                import.meta.env.FREE_TIER_PLAN_ID,
            );
            const formData = new FormData();
            const response = await fetch(meta.avatarUrl);
            if (response.ok) {
                const file = await response.blob();
                formData.append("avatar", file);
                formData.append("avatarURL", meta.avatarURL);
            }

            // add the free tier plan id
            console.log(
                "SETTING UP PLAN_ID: ",
                import.meta.env.FREE_TIER_PLAN_ID,
            );
            formData.append("plan_id", import.meta.env.FREE_TIER_PLAN_ID);
            formData.append("name", meta.name);
            await pb.collection("users").update(authData.record.id, formData); // update user's data
            isLoading = false;
        }

        const cookieString = pb.authStore.exportToCookie({ httpOnly: false });
        document.cookie = cookieString;
        // do we need this??
        if (pb.authStore.isValid) {
            window.location.href = "/dashboard";
        }
    }

    async function onSubmitHandler(e) {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("email", email);
            formData.append("password", password);
            formData.append(
                "plan_id",
                import.meta.env.FREE_TIER_PLAN_ID || "0",
            );
            await pb.collection("users").create(formData);
            await pb.collection("users").authWithPassword(email, password);
            await pb.collection("users").requestVerification(email);
            isLoading = false;
        } catch (err) {
            error =
                "חלה שגיאה בעת תהליך ההרשמה. אנא נסה מאוחר יותר, או צור קשר עם תמיכה.";
        }
    }
</script>

<section
    class="container flex h-screen w-screen flex-col items-center justify-center"
>
    <div class="flex flex-row flex-wrap justify-center items-center gap-20">
        <div
            class="flex w-full flex-col justify-center space-y-6 sm:w-[350px] md:w-[450px] md:shadow-lg md:rounded-lg md:p-6"
        >
            <div class="flex flex-col space-y-2 text-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mx-auto h-6 w-6 text-teal"
                    ><circle cx="12" cy="12" r="3"></circle><path
                        d="M3 7V5a2 2 0 0 1 2-2h2"
                    ></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path
                        d="M21 17v2a2 2 0 0 1-2 2h-2"
                    ></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg
                >
                <h1 class="text-2xl font-semibold tracking-tight">הרשמה</h1>
                <p class="text-sm text-muted-foreground">
                    הרשם באמצעות אימייל וסיסמא
                </p>
            </div>
            <div class="grid gap-6">
                <form onsubmit={onSubmitHandler}>
                    <div class="grid gap-2">
                        <div class="grid gap-1">
                            <label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
                                for="email">אימייל</label
                            ><input
                                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="email"
                                placeholder="כתובת האימייל שלך"
                                autocapitalize="none"
                                autocomplete="email"
                                autocorrect="off"
                                type="email"
                                name="email"
                                bind:value={email}
                            />
                        </div>
                        <div class="grid gap-1">
                            <label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
                                for="password">סיסמא</label
                            ><input
                                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="password"
                                placeholder="סיסמא"
                                type="password"
                                name="password"
                                bind:value={password}
                            />
                        </div>

                        {#if error}
                            <p
                                class="py-4 text-center text-base text-red bold text-bold"
                            >
                                {error}
                            </p>
                        {/if}
                        <button
                            class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-teal text-white hover:bg-teal/90 h-10 px-4 py-2"
                            type="submit">הרשמה</button
                        >
                    </div>
                </form>
                <div class="relative">
                    <div class="absolute inset-0 flex items-center">
                        <span class="w-full border-t"></span>
                    </div>
                    <div class="relative flex justify-center text-xs uppercase">
                        <span class="bg-background px-2 text-muted-foreground"
                            >או המשיכו עם</span
                        >
                    </div>
                </div>
                <button
                    onclick={onGoogleLogin}
                    type="button"
                    class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                    ><svg
                        width="48px"
                        height="48px"
                        viewBox="0 0 48 48"
                        enable-background="new 0 0 48 48"
                        class="mr-2 h-4 w-4"
                        ><path
                            fill="#FFC107"
                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path><path
                            fill="#FF3D00"
                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                        ></path><path
                            fill="#4CAF50"
                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                        ></path><path
                            fill="#1976D2"
                            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path></svg
                    > הרשם עם חשבון גוגל</button
                >
            </div>
            <p class="px-8 text-center text-sm text-muted-foreground">
                <a
                    class="hover:text-brand underline underline-offset-4"
                    href="/login">כבר יש לך חשבון? התחבר כאן</a
                >
            </p>
        </div>
    </div>
</section>
