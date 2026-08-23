window.tailwind = window.tailwind || {};
window.tailwind.config = {
    theme: {
        extend: {
            colors: {
                paper: '#F6F5F1',
                paperDeep: '#ECE7DD',
                ink: '#16140F',
                stone: '#7A7368',
                line: '#E1DCCF',
                nova: { coral: '#FF4B36', amber: '#FFB238' }
            },
            fontFamily: {
                display: ['Sora', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace']
            },
            borderRadius: { xl2: '1.4rem' }
        }
    }
};
