<template>
  <div>
    <CertificationForm :title="'ログイン'" :submitBtnText="'ログイン'" :methodName="'login'" />
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
