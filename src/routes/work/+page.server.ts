import { trackEvent } from "$lib/mixpanel_service.server";

export async function load() {
    await trackEvent('work');
}