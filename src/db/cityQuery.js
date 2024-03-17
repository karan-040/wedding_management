const particular_city = `
SELECT 
    wh.hall_id, 
    wh.hall_name, 
    wh.hall_city AS city, 
    ROUND(COALESCE(AVG(r.rating), 0), 1) AS avg_rating, 
    wh.hall_min_price, 
    wh.hall_max_price 
FROM 
    wedding_halls wh 
LEFT JOIN 
    ratings r 
ON 
    wh.hall_id = r.hall_id 
WHERE 
    wh.hall_city = $1 
GROUP BY 
    wh.hall_id, 
    wh.hall_name, 
    wh.hall_city, 
    wh.hall_min_price, 
    wh.hall_max_price 
ORDER BY 
    wh.hall_id 
LIMIT 6 
OFFSET 0;
`

export default particular_city
