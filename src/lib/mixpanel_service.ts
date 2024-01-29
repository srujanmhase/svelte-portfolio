import { PRIVATE_TOKEN } from '$env/static/private';

export function trackEvent(event: string) {
    const options = {
        method: 'POST',
        headers: { accept: 'text/plain', 'content-type': 'application/json' },
        body: JSON.stringify([
            {
                event: event,
                properties: { token: PRIVATE_TOKEN }
            }
        ])
    };

    fetch('https://api.mixpanel.com/track', options)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("There was a problem with your fetch operation:", error);
        });

}

