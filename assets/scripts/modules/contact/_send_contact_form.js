import axios from 'axios';
const qs = require('querystring');

class SendContactForm{

    constructor(){
        this.form = document.querySelector('form[name="contact_planing"]');
        this.url = this.form ? this.form.action : null;
        this.btnSend = document.querySelector('.btn.sendFormBtn');
        this.sendLoadingDots = document.querySelector('.loading_dots');
        this.formData = new URLSearchParams();
        
        this.events();
    }

    events(){
        this.btnSend.addEventListener('click', this.sendForm.bind(this));
    }

    isValidForm(){
        return this.form.checkValidity();
    }

    collectData(){
        let that = this;
        this.form.querySelectorAll("input[name], textarea, select").forEach(function (input) {
            
            if(input.type !== 'checkbox' || input.checked)
                that.formData.append(input.name, input.value);
        });
    }

    
    sendForm(e){
        if(this.isValidForm())
        {
            e.preventDefault();
            this.collectData();
        
            let that = this;
            let config = {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
              };



            axios.post(this.url, this.formData, config)
                .then(function (response) {
                    // console.log(response);
                    if(response.status === 200)
                        that.showMessage("success");    
                    else
                        that.showMessage("error");        
                })
                .catch(function (error) {
                    that.showMessage("error");
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

    showMessage(event){
        let msg = document.querySelector(".sendFormInfo__" + event);
        if(msg)
        {
            msg.classList.remove("hidden");
            if(event === "error")
                this.btnSend.classList.remove("invisible");
        }
    }
   
}

export default SendContactForm;