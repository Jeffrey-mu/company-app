let data = {}

export default defineEventHandler((value) => {
  let id = value.node.req.url.split('?')[1].split('=')[1]
  $fetch(`/public/${id}.json`).then(res => {
    console.log(res)
  })
  return data
})
