const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');
    const cont = document.getElementById('container');
    const but = document.getElementById('login_button');
    const header = document.getElementById('form_header');
    const field = document.getElementsByClassName('input-field');

    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        cont.classList.add('dark');
        but.classList.add('dark');
        header.classList.add('dark');
        field.classList.add('dark');
        return;
    }

    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');
    form.classList.remove('dark');
    cont.classList.remove('dark');
    but.classList.remove('dark');
    header.classList.remove('dark');
    field.classList.remove('dark');
});
