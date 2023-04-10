<template>
  <div class="main">
    <h2>{{ title }}</h2>
    <TextInput :value="user.name" :type="'text'" :label="'名前'" @input="user.name = $event" />
    <TextInput :value="user.name_kana" :type="'text'" :label="'ふりがな'" @input="user.name_kana = $event" />
    <TextInput :value="user.email" :type="'email'" :label="'メールアドレス'" @input="user.email = $event" />
    <TextInput :value="user.password" :type="'password'" :label="'パスワード'" @input="user.password = $event" />
    <SubmitButton :text="submitBtnText" :methodName="methodName" @click-event="handleClickEvent" />
  </div>
</template>

<script>
import TextInput from '~/components/Molecules/TextInput.vue'
import SubmitButton from '~/components/Atoms/Button/SubmitButton.vue'

export default {
  components: {
    TextInput,
    SubmitButton
  },
  props: {
    title: {
      type: String,
      required: true
    },
    submitBtnText: {
      type: String,
      required: true
    },
    methodName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      user: {
        name: '',
        name_kana: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    handleClickEvent() {
      switch (this.methodName) {
        case 'signup':
          this.signup()
          break
        case 'signin':
          this.signin()
          break
        default:
          console.error('Invalid method name:', this.methodName)
          break
      }
    },
    async signup() {
      console.log('実行')
      try {
        await this.$axios.post('/auth', {
          name: this.user.name,
          name_kana: this.user.name_kana,
          email: this.user.email,
          password: this.user.password
        })
        alert('登録完了')
      } catch (e) {
        this.error = e.response.data.errors.full_messages
        alert(this.error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: grid;
  justify-content: center;
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
