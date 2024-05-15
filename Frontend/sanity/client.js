import {SanityClient, createClient} from '@sanity/client'

export const client = createClient({
  //Hvis du har hentet dette prosjektet fra GitHub, må du endre
  //projectId til din egen prosjektid fra sanity.io/manage
  projectId: "s2614gkl",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-07"
})

//TOKEN - Genre Fetch
//Fetching genre list from sanity
//skWMHrp8b38EqMANNdNoR5PDEB2ZDjovTLRLQoz7GTbH6FvQ6hyPUXyGsqwif80CPAQuzzWzo8uEbnZrIycHayCfToC0ZIkBrP30wxWJQBjcqYUyBOhsTeVScfrs5jCiILB7zI2ovsg5M89v0Kdi0GfkcE3PoDY8o8s4DYab5qA4dZmd9tpo

//TOKEN - addFavGenre
//Adding favorite genre to user
//skyJhdHksoaj0i1dThgaeMpgzyFwTnrRkCTcn7ay82s1LbeYmv5scMxqx2blod5jpYzqTd8GuBuAY0EuqsOV0lBIj8bJzFsXlUg1se33r9Zn4a1xUt5LocuecBgXXMxGA9nl10pCqqKVcDZrcZn8JC3juIST6pSBBRjJkHrSUNdL6BiD0uqE

export const writeClient = createClient({
  projectId: "s2614gkl",
  dataset: "production",
  useCdn: false,
  apiVersion: "2022-03-07",
  token: "skWMHrp8b38EqMANNdNoR5PDEB2ZDjovTLRLQoz7GTbH6FvQ6hyPUXyGsqwif80CPAQuzzWzo8uEbnZrIycHayCfToC0ZIkBrP30wxWJQBjcqYUyBOhsTeVScfrs5jCiILB7zI2ovsg5M89v0Kdi0GfkcE3PoDY8o8s4DYab5qA4dZmd9tpo"
})
