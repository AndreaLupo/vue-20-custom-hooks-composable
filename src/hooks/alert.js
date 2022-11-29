import { ref } from 'vue';

export default function useAlert(startingVisibility = false) {
    const alertIsVisible = ref(startingVisibility);

    function showAlert() {
      alertIsVisible.value = true;
    }
    function hideAlert() {
      alertIsVisible.value = false;
    }

    // can return what I want! No default structure required, it's just a function
    return [
      alertIsVisible,
      showAlert,
      hideAlert,
    ];
}