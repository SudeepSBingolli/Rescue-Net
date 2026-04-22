import supabase from './supabaseClient.js'

const test = async () => {
  const { data, error } = await supabase
    .from('devices')
    .insert([
      {
        device_type: 'mobile',
        status: 'active'
      }
    ])
    .select()

  console.log(data)
  console.log(error)
}

test()