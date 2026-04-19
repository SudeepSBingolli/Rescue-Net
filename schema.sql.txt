-- USERS (already in Supabase Auth, optional custom)

-- DEVICES
CREATE TABLE devices (
  device_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  device_type TEXT,
  status TEXT,
  last_active TIMESTAMP DEFAULT now()
);

-- TRAFFIC
CREATE TABLE traffic_signals (
  signal_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  location TEXT,
  status TEXT,
  is_emergency_override BOOLEAN DEFAULT false
);

-- AMBULANCE
CREATE TABLE ambulance (
  ambulance_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  driver_name TEXT,
  status TEXT,
  location_lat FLOAT,
  location_lng FLOAT
);

-- HOSPITAL
CREATE TABLE hospital (
  hospital_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  location TEXT,
  available_beds INT,
  contact TEXT
);

-- EMERGENCY CASE
CREATE TABLE emergency_cases (
  case_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  device_id UUID,
  ambulance_id UUID,
  hospital_id UUID,
  location TEXT,
  status TEXT,
  created_at TIMESTAMP DEFAULT now()
);

-- FOREIGN KEYS
ALTER TABLE devices
ADD FOREIGN KEY (user_id) REFERENCES users(user_id);

ALTER TABLE emergency_cases
ADD FOREIGN KEY (user_id) REFERENCES users(user_id);

ALTER TABLE emergency_cases
ADD FOREIGN KEY (device_id) REFERENCES devices(device_id);

ALTER TABLE emergency_cases
ADD FOREIGN KEY (ambulance_id) REFERENCES ambulance(ambulance_id);

ALTER TABLE emergency_cases
ADD FOREIGN KEY (hospital_id) REFERENCES hospital(hospital_id);