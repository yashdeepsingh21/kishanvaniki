/*
  # Create booking_inquiries table

  1. New Tables
    - `booking_inquiries`
      - `id` (uuid, primary key)
      - `full_name` (text, customer's full name)
      - `mobile_number` (text, customer's mobile number)
      - `state` (text, customer's state in India)
      - `plant_type` (text, type of plant interested in)
      - `quantity` (text, quantity desired)
      - `message` (text, additional message from customer)
      - `created_at` (timestamptz, submission timestamp)

  2. Security
    - Enable RLS on `booking_inquiries` table
    - Add policy for public insert (anyone can submit booking inquiries)
    - Add policy for authenticated users to view inquiries
    - No update/delete policies for public (data is protected)
*/

CREATE TABLE IF NOT EXISTS booking_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL DEFAULT '',
  mobile_number text NOT NULL DEFAULT '',
  state text NOT NULL DEFAULT '',
  plant_type text NOT NULL DEFAULT '',
  quantity text NOT NULL DEFAULT '',
  message text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE booking_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public booking inquiry submissions"
  ON booking_inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view inquiries"
  ON booking_inquiries FOR SELECT
  TO authenticated
  USING (true);
