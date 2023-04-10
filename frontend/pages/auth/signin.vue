<template>
  <div>
    <CertificationForm :title="'ログイン'" :submitBtnText="'ログイン'" :methodName="'signin'" />
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
