import axios from 'axios';
const qs = require('querystring');

class SendContactForm{

    constructor()
    {
        this.statusCodes = {'error': 'error', 'success' : 'success'  };

        this.form = document.querySelector('form[name="contact_planing"]');
        this.url = this.form ? this.form.action : null;
        this.btnSend = document.querySelector('.btn.sendFormBtn');
        this.sendLoadingDots = document.querySelector('.loading_dots');
        this.formData = new URLSearchParams();
        
        this.events();
    }

    events()
    {
        this.btnSend.addEventListener('click', this.sendForm.bind(this));
    }

    isValidForm()
    {
        return this.form.checkValidity();
    }

    collectData()
    {
        let that = this;
        this.form.querySelectorAll("input[name], textarea, select").forEach(function (input) {

            let appendCurrent = true;

            //Only add active chekbox and others inputs!
            if (input.type === 'checkbox' && input.checked == false ) {
                appendCurrent = false;
            }

            if (input.type === 'radio' && input.checked === false ) {
                appendCurrent = false;
            }

            if (appendCurrent) {
                that.formData.append(input.name, input.value);
            }
        });
    }

    
    sendForm(e)
    {
        if (this.isValidForm()) {
            e.preventDefault();
            this.collectData();
        
            let that = this;
            let config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };



            let statusCodes = this.statusCodes;
            axios.post(this.url, this.formData, config)
                .then(function (response, statusCodes) {
                    // console.log(response);
                    if (response.status === 200) {
                        that.showMessage(statusCodes.success);
                    } else {
                        that.showMessage(statusCodes.error);
                    }
                })
                .catch(function (error) {
                    that.showMessage(statusCodes.error);
                    // console.log(error);
                })
                .finally(function () {
                    that.sendLoadingDots.classList.remove("loading_dots--visible");
                });

            this.btnSend.classList.add("invisible");
            this.sendLoadingDots.classList.add("loading_dots--visible");
            this.form.querySelectorAll(".sendFormInfo").forEach(function (msg) {
                msg.classList.add("hidden");
            });
        }
    }

    showMessage(statusCode)
    {
        let msg = document.querySelector(".sendFormInfo__" + statusCode);
        if (msg) {
            msg.classList.remove("hidden");
            if (statusCode === this.statusCodes.error) {
                this.btnSend.classList.remove("invisible");
            }
        }
    }
   
}

export default SendContactForm;