const vol9 = "mysticToaster Vol. 9";
const vol8 = "mysticToaster Vol. 8";
const vol7 = "mysticToaster Vol. 7";
const vol6 = "mysticToaster Vol. 6";
const crowd = "toastercrowd";

function getSongs(){
    return[
        {
            source: 'Auffytune',
            album: vol7,
        },
        {
            source: 'Battle-Against-A-Foxy-Opponent',
            album: vol9,
        },
        {
            source: 'Battle-Against-An-Inflatable-Opponent',
            album: vol8,
        },
        {
            source: 'Can\'t-Blame-a-Val-for-Trying',
            album: vol6,
        },
        {
            source: 'Cave-Quest-Cohort',
            album: vol9,
        },
        {
            source: 'City-Nightlife,-Finally-Quiet',
            album: vol6,
        },
        {
            source: 'Deep-Space-Hyper-Tunneling',
            album: vol9,
        },
        {
            source: 'Do-Not-Fear-The-Everfree\'s-Dark',
            album: crowd,
        },
        {
            source: 'Dream-Salt-Scuffle',
            album: vol8,
        },
        {
            source: 'Drowned-Desert',
            album: crowd,
        },
        {
            source: 'Femmethuselah',
            album: vol6,
        },
        {
            source: 'Fly-Away-Bluebird',
            album: crowd,
        },
        {
            source: 'Forever-Fountain',
            album: vol7,
        },
        {
            source: 'Liquidthunder',
            album: vol7,
        },
        {
            source: 'Lovebirds',
            album: vol7,
        },
        {
            source: 'Loveless-Lost',
            album: vol8,
        },
        {
            source: 'Party-Groove-Wagon-Back-In-The-Saddle',
            album: vol9,
        },
        {
            source: 'Battle-Against-A-Playful-Opponent',
            album: vol8,
        },
        {
            source: 'The-Slow-Recovery-(With-Strings)',
            album: vol7,
        },
        {
            source: 'The-Sad-Story-of-Canadian-Importance',
            album: crowd,
        },
        {
            source: 'The-King-of-RumbleRock,-the-Evilsmite',
            album: vol8,
        },
        {
            source: 'Sweet-Nostalgia',
            album: vol7,
        },
        {
            source: 'The-Choice-To-Be-Happy',
            album: vol9,
        },
        {
            source: 'The-Things-The-Bird-Eternal-Keeps-Hidden',
            album: vol7,
        },
        {
            source: 'Theme-Screen-Supreme',
            album: crowd,
        },
        {
            source: 'The-Way-You-Make-Me-Feel',
            album: vol7,
        },
        {
            source: 'Universoul',
            album: vol7,
        },
        {
            source: 'Untitled-Mothafuckin\'-Jam',
            album: vol6,
        },
        {
            source: 'ZO_IM_NE',
            album: vol6,
        },
        {
            source: 'Starfield-Stroll',
            album: vol8,
        },
        {
            source: 'Sumbitch-Smoothies',
            album: vol9,
        }
    ].sort((a,b) => a.source.localeCompare(b.source));
}
