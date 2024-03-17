const wish_query = `
  SELECT
    wh.hall_id,
    wh.hall_name,
    wh.hall_city AS city,
    wh.hall_min_price,
    wh.hall_max_price,
    ROUND(COALESCE(AVG(r.rating), 0), 1) AS avg_rating
  FROM
    wedding_halls wh
    LEFT JOIN ratings r ON wh.hall_id = r.hall_id
    INNER JOIN favorites f ON wh.hall_id = f.hall_id
  WHERE
    f.email = $1
  GROUP BY
    wh.hall_id, wh.hall_name, wh.hall_city, wh.hall_min_price, wh.hall_max_price;
`

export default wish_query