<template>
  <div>
    <CertificationForm :title="'新規登録'" :submitBtnText="'新規登録'" :methodName="'signup'" />
  </div>
</template>

<script>
import CertificationForm from '~/components/Organisms/Auth/CertificationForm.vue'

export default {
  components: {
    CertificationForm,
  }
}
</script>
