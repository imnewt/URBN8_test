SELECT TOP 10
    stu.St_id,
    stu.st_name,
    gra.Marks,
    sub.Sub_name
FROM Student stu, Grade gra, Subject sub
WHERE
    stu.St_id = gra.St_id AND
    gra.Sub_code = sub.Sub_code
ORDER BY gra.Marks DESC