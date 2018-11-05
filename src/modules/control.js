import cube from 'cube-ui'
import vue from 'vue'
vue.use(cube)

function ShowMessage (content) {
  cube.Dialog.$create({
    type: 'alert',
    title: '提示',
    content: content,
    icon: 'cubeic-alert'
  }).show()
}

function customToast (content) {
  return cube.Toast.$create({
    txt: content,
    mask: true
  })
}

export {
  ShowMessage,
  customToast
}
