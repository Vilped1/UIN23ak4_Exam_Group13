import {createClient} from '@sanity/client'

export const client = createClient({
  //Hvis du har hentet dette prosjektet fra GitHub, må du endre
  //projectId til din egen prosjektid fra sanity.io/manage
  projectId: "s2614gkl",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-07"
})

//skWMHrp8b38EqMANNdNoR5PDEB2ZDjovTLRLQoz7GTbH6FvQ6hyPUXyGsqwif80CPAQuzzWzo8uEbnZrIycHayCfToC0ZIkBrP30wxWJQBjcqYUyBOhsTeVScfrs5jCiILB7zI2ovsg5M89v0Kdi0GfkcE3PoDY8o8s4DYab5qA4dZmd9tpo
//skNjGLc67wmrw1P1weBXeABs3YAwfpj3l4SjKVWFHIChiRd5Ko9GrrDj6137Gj2i8F26N5y6ahBqK7kdfh3llVBTtYRIZdqwmzDAGV2Ktz8zZ95wdiMfSVSYHfTqpu8d16k34OTv8PnPyHlK8qZDTyc0EfwkMVGXw9oLVHfKWqFFRPutBniA
export const writeClient = createClient({
  projectId: "s2614gkl",
  dataset: "production",
  useCdn: false,
  apiVersion: "2022-03-07",
  token: "skNjGLc67wmrw1P1weBXeABs3YAwfpj3l4SjKVWFHIChiRd5Ko9GrrDj6137Gj2i8F26N5y6ahBqK7kdfh3llVBTtYRIZdqwmzDAGV2Ktz8zZ95wdiMfSVSYHfTqpu8d16k34OTv8PnPyHlK8qZDTyc0EfwkMVGXw9oLVHfKWqFFRPutBniA"
})