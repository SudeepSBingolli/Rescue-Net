-- USERS TABLE (custom user profile linked to auth.users)
CREATE TABLE users (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id),
  created_at TIMESTAMP DEFAULT now(),
  name TEXT,
  phone TEXT,
  email TEXT,
  role TEXT
);

-- DEVICES
CREATE TABLE devices (
  device_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(user_id),
  device_type TEXT,
  status TEXT,
  last_active TIMESTAMP DEFAULT now()
);

-- AMBULANCE
CREATE TABLE ambulance (
  ambulance_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  driver_name TEXT,
  status TEXT,
  location_lat FLOAT,
  location_lng FLOAT
);

-- TRAFFIC SIGNALS
CREATE TABLE traffic_signals (
  signal_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  location TEXT,
  status TEXT,
  is_emergency_override BOOLEAN DEFAULT false
);

-- HOSPITAL
CREATE TABLE hospital (
  hospital_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  location TEXT,
  available_beds INT,
  contact TEXT
);

-- WALLET
CREATE TABLE wallet (
  wallet_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP DEFAULT now(),
  user_id UUID REFERENCES users(user_id),
  balance NUMERIC DEFAULT 0,
  status TEXT
);

-- WALLET TRANSACTIONS
CREATE TABLE wallet_transactions (
  txn_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP DEFAULT now(),
  wallet_id UUID REFERENCES wallet(wallet_id),
  amount NUMERIC,
  txn_type TEXT,
  status TEXT,
  risk_score NUMERIC
);

-- EMERGENCY CASES (MAIN TABLE)
CREATE TABLE emergency_cases (
  case_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(user_id),
  device_id UUID REFERENCES devices(device_id),
  ambulance_id UUID REFERENCES ambulance(ambulance_id),
  hospital_id UUID REFERENCES hospital(hospital_id),
  location TEXT,
  status TEXT,
  created_at TIMESTAMP DEFAULT now()
);