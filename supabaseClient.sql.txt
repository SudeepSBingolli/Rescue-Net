import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nvxdpjhvaliwzxaaseqm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52eGRwamh2YWxpd3p4YWFzZXFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY1NzE2MjksImV4cCI6MjA5MjE0NzYyOX0.6fid-cpZ93m_VmSNm7uCmKFxgH-zzcfpWuMAxTFhBVQ'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase