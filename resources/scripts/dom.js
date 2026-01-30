if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            axios.get(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=5`)
                .then((response) => {
                    setInterval(() => {
                        let timings = response.data.data.timings;
                        let date = response.data.data.date.readable;
                        let city = response.data.data.meta.timezone;
                        let data = prayers(timings);
                        let next = nextPrayer(data);
                        let nextTime = nextPrayerTime(next);

                        document.querySelector('.container-left').innerHTML = `
                            ${data.map(prayer => `
                                <div class="prayer-time ${prayer.class == next.class ? 'active' : ''}">
                                    <div class="prayer-time-time">${UItime(parseTime(prayer.time))}</div>
                                    <div class="prayer-time-title">${prayer.title}</div>
                                </div>
                            `).join('')}
                        `;

                        document.querySelector('.container-right').innerHTML = `
                            <div class="date-time">
                                <div class="time">${UItime(clock())}</div>
                                <div class="date">${date}</div>
                            </div>
                            <div class="city">
                                <h3>المدينة </h3>
                                <h2>${city}</h2>
                            </div>
                            <div class="next-prayer">
                                <div class="next-prayer-title">الصلاة القادمة</div>
                                <div class="next-prayer-time-title">${next.title}</div>
                                <div class="next-prayer-time">
                                    <div class="next-prayer-time-time">
                                        <div class="hours">${UItime(nextTime, true)[0]}</div>
                                        <div class="minutes">${UItime(nextTime, true)[1]}</div>
                                        <div class="seconds">${UItime(nextTime, true)[2]}</div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }, 1000);
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    document.querySelector('.loading').style.opacity = "0";
                    document.querySelector('.loading').style.pointerEvents = "none";
                });

        },
        (error) => {
            console.error("Error getting location:", error.message);
        }
    );
} else {
    console.error("Geolocation not supported in this browser.");
}
