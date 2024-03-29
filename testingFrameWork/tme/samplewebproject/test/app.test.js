const assert = require('assert');
const render = require('../../render');

it('has a text input', async () => {
    const dom = await render('index.html');

    const input = dom.window.document.querySelector('input');

    assert(input);
});

it('shows a success message with a valid email', async () => {
    const dom = await render('index.html');

    const input = dom.window.document.querySelector('input');
    input.value = 'e@mail.com';

    dom.window.document
        .querySelector('form')
        .dispatchEvent(new dom.window.Event('submit'));

    const h1 = dom.window.document.querySelector('h1');
    assert.strictEqual(h1.innerHTML, 'looks good');
    // console.log('-->', h1.innerHTML);
});


it('shows a error message with a invalid email', async () => {
    const dom = await render('index.html');

    const input = dom.window.document.querySelector('input');
    input.value = 'email.com';

    dom.window.document
        .querySelector('form')
        .dispatchEvent(new dom.window.Event('submit'));

    const h1 = dom.window.document.querySelector('h1');
    assert.strictEqual(h1.innerHTML, 'invalid email');
    // console.log('-->', h1.innerHTML);
});