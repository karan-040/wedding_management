const filterQuery = `
  SELECT
    wh.hall_id,
    wh.hall_name,
    wh.hall_city AS city,
    ROUND(COALESCE(AVG(r.rating), 0), 1) AS avg_rating,
    COUNT(r.rating) AS num_reviews,
    wh.hall_min_price,
    wh.hall_max_price
  FROM
    wedding_halls wh
    LEFT JOIN ratings r ON wh.hall_id = r.hall_id
  WHERE
    wh.hall_min_price >= $1
    AND wh.hall_max_price <= $2
  GROUP BY
    wh.hall_id
  HAVING
    ROUND(COALESCE(AVG(r.rating), 0), 1) >= $3
    AND COUNT(r.rating) >= $4
  ORDER BY
    wh.hall_id;
`;

export default filterQuery
