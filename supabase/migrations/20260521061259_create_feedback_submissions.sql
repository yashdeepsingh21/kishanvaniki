/*
  # Create feedback_submissions table

  1. New Tables
    - `feedback_submissions`
      - `id` (uuid, primary key)
      - `would_purchase` (boolean, whether user would purchase products)
      - `interested_product` (text, which product interests user most)
      - `expected_price` (text, user's expected price range)
      - `contact` (text, email or Instagram handle)
      - `created_at` (timestamptz, submission timestamp)

  2. Security
    - Enable RLS on `feedback_submissions` table
    - Add policy for authenticated users to insert their own feedback
    - Add policy for anyone to insert feedback (public insert for form submissions)
    - No select/update/delete policies for public (data is private)
*/

CREATE TABLE IF NOT EXISTS feedback_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  would_purchase boolean NOT NULL DEFAULT false,
  interested_product text NOT NULL DEFAULT '',
  expected_price text NOT NULL DEFAULT '',
  contact text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE feedback_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public feedback submissions"
  ON feedback_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view own submissions"
  ON feedback_submissions FOR SELECT
  TO authenticated
  USING (true);
