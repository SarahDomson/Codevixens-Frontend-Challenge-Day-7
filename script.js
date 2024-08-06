document.addEventListener('DOMContentLoaded', function() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const quotes = [
        'Time to party! Saturdays are for adventures, relaxation, and fun. It\'s a day to let go of the week\'s stresses and to enjoy the company of friends and family.',
        'Mondays are fresh starts, embrace the day with positivity!',
        'Tuesdays are for progress, keep pushing forward!',
        'Wednesdays are halfway to the weekend!',
        'Thursdays are for planning, get ready for the weekend!',
        'Fridays are for celebration, the weekend is here!',
        'Sundays are for rest and reflection. Recharge for the week ahead!'
    ];

    function updateDayAndQuote() {
        const now = new Date();
        const dayIndex = now.getDay();
        const day = days[dayIndex];
        const quote = quotes[dayIndex];

        document.getElementById('day').innerText = day;
        document.getElementById('quote').innerText = quote;
    }

    updateDayAndQuote();
});
