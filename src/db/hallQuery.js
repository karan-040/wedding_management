const particular_id = `
  SELECT
    wh.hall_id,
    wh.hall_name,
    wh.hall_city,
    COALESCE(ROUND(AVG(r.rating), 1), 0) AS avg_rating,
    wh.contact_no
  FROM
    wedding_halls wh
    LEFT JOIN ratings r ON wh.hall_id = r.hall_id
  WHERE
    wh.hall_id = $1
  GROUP BY
    wh.hall_id, wh.hall_name, wh.hall_city, wh.contact_no;
`;

export default particular_id