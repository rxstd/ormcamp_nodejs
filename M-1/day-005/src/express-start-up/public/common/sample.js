function fnValidation() {
  if (!document.querySelector('input[name="id"]').value) {
    alert("아이디를 입력해주세요.");
    return;
  }
  if (!document.querySelector('input[name="password"]').value) {
    alert("비밀번호를 입력해주세요.");
    return;
  }
  if (!document.querySelector('input[name="name"]').value) {
    alert("이름을 입력해주세요.");
    return;
  }
  document.querySelector("form").submit();
}
