import math
points = [[0,0], [0,1], [1,0]]

def do_points_form_a_right_triangle(points):
#input list of 3 pts
#form a right triangle
#pythagorean theorem
#find length of sides 
#distance - sqrt((x1-x2) +(y1-y2))
	first_length = math.sqrt((points[0][0]-points[1][0])+((points[0][1]-points[1][1])));
	second_length = math.sqrt((points[1][0]-points[2][0])+((points[1][1]-points[2][1])))
	third_length = math.sqrt((points[2][0]-points[3][0])+((points[2][1]-points[3][1])))
          



do_points_form_a_right_triangle(points)
