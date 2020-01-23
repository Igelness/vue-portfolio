<template>
  <section class="contact-me">
    <div class="row">
      <div class="col-xl-12">
        <h3 class="contact-me__title">{{ formTitle }}</h3>
      </div>
      <div class="col-xl-12">
        <form
            class="contact-me__form"
            @submit.prevent="submit"
        >
          <input
            id="name"
            class="contact-me__input"
            type="text" name="username"
            value=""
            placeholder="Имя"
            v-model.trim="name"
          >
          <div class="text-danger" v-if="$v.name.$dirty && !$v.name.required">Введите имя</div>
          <div class="text-danger" v-if="$v.name.$dirty && !$v.name.minLength">Минимальное количество символов: {{ $v.name.$params.minLength.min }}</div>
          <input
            id="email"
            class="contact-me__input"
            type="text"
            name="usermail"
            value=""
            placeholder="Email Address"
            v-model.trim="email"
          >
          <div class="text-danger" v-if="$v.email.$dirty && !$v.email.required">Введите email</div>
          <div class="text-danger" v-if="$v.email.$dirty && !$v.email.email">Введите корректный email</div>

          <input
            id="phone"
            class="contact-me__input"
            type="tel"
            name="userphone"
            value=""
            placeholder="Контактный телефон"
            v-model.trim="phone"
          >
          <div class="text-danger" v-if="$v.phone.$dirty && !$v.phone.required">Введите контактный телефон</div>
          <textarea
            id="message"
            class="contact-me__input textarea"
            name="usermessage"
            placeholder="Сообщение"
            cols="30"
            rows="2"
            v-model="message"
          >
          </textarea>
          <div class="text-danger" v-if="$v.message.$dirty && !$v.message.required">Введите сообщение</div>
          <button  id="contact-me__submit" type="submit" :disabled="disabled">Отправить</button>
        </form>
      </div>
      <div>
        <b-modal id="form__modal" cancel-title="Закрыть" title="Спасибо!">
          <p class="my-4">Сообщение отправлено!</p>
        </b-modal>
      </div>
    </div>
  </section>
</template>

<script>
  import { required, minLength, email } from 'vuelidate/lib/validators'

  export default {
    name: "HomeForm",
    data: () => ({
      name: "",
      email: "",
      phone: "",
      message: "",
      formTitle: "Contact me",
      disabled: false,
    }),
    validations: {
      name: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      phone: {
        required
      },
      message: {
        required
      },
    },
    methods: {
      submit() {
        if (this.$v.$invalid) {
          this.disabled = false;
          this.$v.$touch()
          return false;
        }
        Email.send({
          SecureToken: '265c5634-9ea7-4da5-816c-8993261809f5',
          To : 'a.a.vorobyev0@gmail.com',
          From : "a.a.vorobyev0@mail.ru",
          Subject : "Сообщение",
          Body : ` Имя : ${this.name};\n
                   E-mail : ${this.email};\n
                   Телефон : ${this.phone};\n
                   Сообщение : ${this.message}`
        }).then(
          message => console.log(message)
        );
        this.$bvModal.show("form__modal")
        this.message = ''
        this.phone = ''
        this.name = ''
        this.email = ''
        this.$v.$reset()
        setTimeout(() => this.disabled = false, 2000)
      },
    }
  }
</script>

<style scoped>
</style>