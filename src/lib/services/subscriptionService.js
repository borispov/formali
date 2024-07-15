import { authorizePB } from "$lib/utils/pb";

export class SubscriptionService {
  constructor(pb) {
    this.pb = authorizePB();
  }

  async upgradeSubscription(userId, planId) {
    const formData = new FormData();
    formData.append("plan_id", planId);
    console.log("setting up a new plan_id", planId);
    await pb.collection("users").update(userId, formData); // update user's data
  }
}
