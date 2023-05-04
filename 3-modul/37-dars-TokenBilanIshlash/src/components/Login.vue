<template >
  <div class="container text-center ">
    <main class="form-signin w-25 m-auto mt-5">
      <form>
        <img class="mb-4" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" width="72" >
        <h1 class="h3 mb-3 fw-normal mt-3">Please sign in</h1>
        <Input :label="'Email'" :type="email"  ></Input>
        <Input :label="'Password'" :type="password"  ></Input>
              
        <Button type="submit">Login</Button>
      </form>
    </main>
  </div>
</template>
<script>
export default {
    
}
</script>
<style >
    
</style>