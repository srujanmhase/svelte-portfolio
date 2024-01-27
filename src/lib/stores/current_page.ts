import { derived, writable } from "svelte/store";
import { page } from '$app/stores';
import { tweened } from "svelte/motion";
import { cubicOut } from "svelte/easing";

export const currentPage = {
    home: '/',
    work: '/work',
    endorsment: '/endorsments',
    contact: '/contact'
}

export const rotate = tweened(0, {
    duration: 400,
    easing: cubicOut
});

export const homePadding = tweened(20, { duration: 400, easing: cubicOut });
export const workPadding = tweened(20, { duration: 400, easing: cubicOut });
export const endorsmentPadding = tweened(20, { duration: 400, easing: cubicOut });
export const contactPadding = tweened(20, { duration: 400, easing: cubicOut });

function resetAllPadding() {
    homePadding.set(20);
    workPadding.set(20);
    endorsmentPadding.set(20);
    contactPadding.set(20);
}

export const path = derived(page, ($page) => {
    switch ($page.url.pathname) {
        case currentPage.home:
            rotate.set(20);
            resetAllPadding();
            homePadding.set(100);
            return currentPage.home;
        case currentPage.work:
            rotate.set(40);
            resetAllPadding();
            workPadding.set(100);
            return currentPage.work;
        case currentPage.endorsment:
            rotate.set(60);
            resetAllPadding();
            endorsmentPadding.set(100);
            return currentPage.endorsment;
        case currentPage.contact:
            rotate.set(80);
            resetAllPadding();
            contactPadding.set(100);
            return currentPage.contact;
        default:
            resetAllPadding();
            return currentPage.home;
    }
});


