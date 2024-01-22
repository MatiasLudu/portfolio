document.addEventListener("DOMContentLoaded", (event) => {

    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `
            <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.499594208025!2d-64.18776862522833!3d-31.427910396807082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a28e6e48f90b%3A0x33e559b08adb4c35!2sAv.%20Hip%C3%B3lito%20Yrigoyen%20554-598%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1695683291586!5m2!1ses-419!2sar"></iframe>
        `;
    }, 500);
});