const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = { 
  run: ['01-01', '01-02', '01-06'], 
  water: ['01-04', '01-05'],
  food: ['01-01', '01-03','01-08','01-09'],
  sleep:['01-07','01-10','01-11','01-12','01-14'],

}

nlwSetup.setData(data)

nlwSetup.load()
