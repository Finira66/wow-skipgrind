document.addEventListener('DOMContentLoaded', () => {
    for (const dropdown of document.querySelectorAll(".x-custom-select-wrapper")) {
        dropdown.addEventListener('click', function() {
            this.querySelector('.x-custom-select').classList.toggle('open');
        })
    }

    for (const option of document.querySelectorAll(".custom-option")) {
        option.addEventListener('click', function() {
            if (!this.classList.contains('selected')) {
                this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
                this.classList.add('selected');
                this.closest('.x-custom-select').querySelector('.x-custom-select__trigger span').textContent = this.textContent;
            }
        })
    }

    window.addEventListener('click', function(e) {
        for (const select of document.querySelectorAll('.x-custom-select')) {
            if (!select.contains(e.target)) {
                select.classList.remove('open');
            }
        }
    });
})
