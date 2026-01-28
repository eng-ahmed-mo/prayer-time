const clock = () => {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();;

    return [h, m, s];
}

const toSeconds = ([h, m, s = 0]) => h * 3600 + m * 60 + s;

const parseTime = (time) => time.split(':').map(Number);

const UItime = (time, array) => {
    let [h, m, s] = time;
    let period = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;


    if (array) {
        return [String(h), String(m), String(s)];
    } else {
        if (s == undefined) {
            return `${h}:${m} ${period}`;
        } else {
            return `${h}:${m}:${s} ${period}`;
        }
    }



}

const toTime = (seconds) => {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = seconds % 60;
    return [h, m, s];
}

const prayers = (timings) => {
    let prayers = [
        { title: 'الفجْر', time: timings.Fajr, class: 'fajr' },
        { title: 'الشروق', time: timings.Sunrise, class: 'sunrise' },
        { title: 'الظهر', time: timings.Dhuhr, class: 'dhuhr' },
        { title: 'العصر', time: timings.Asr, class: 'asr' },
        { title: 'المغرب', time: timings.Maghrib, class: 'maghrib' },
        { title: 'العشاء', time: timings.Isha, class: 'isha' },
    ];

    return prayers;
}

const nextPrayer = (prayers) => {
    let now = toSeconds(clock())

    let next = prayers.find(
        p => toSeconds(parseTime(p.time)) > now
    );

    if (!next) {
        next = prayers[0];
        return next;
    } else {
        return next;
    }
};

const nextPrayerTime = (next) => {
    let now = toSeconds(clock());
    let nextTime = toSeconds(parseTime(next.time));

    if (now > nextTime) {
        nextTime += 24 * 3600;
    }
    let diff = nextTime - now;
    return toTime(diff);
};


let latitude = 0;
let longitude = 0;

function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error)
    );
  });
}

(async function GPS() {
  try {
    const position = await getCurrentLocation();
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

  } catch (error) {
    console.error("error", error.message);
  }
})();

async function main() {
  await GPS(); // دلوقتي نضمن إن GPS خلصت
  console.log(latitude, longitude); // ✅ صح
};


