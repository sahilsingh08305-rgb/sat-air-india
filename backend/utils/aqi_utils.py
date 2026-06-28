def cap_aqi(value):
    return min(500, round(value, 2))
def linear_sub_index(c, bp_lo, bp_hi, i_lo, i_hi):
    return ((i_hi - i_lo) / (bp_hi - bp_lo)) * (c - bp_lo) + i_lo


def pm25_aqi(c):
    if c <= 30:
        return linear_sub_index(c, 0, 30, 0, 50)
    elif c <= 60:
        return linear_sub_index(c, 31, 60, 51, 100)
    elif c <= 90:
        return linear_sub_index(c, 61, 90, 101, 200)
    elif c <= 120:
        return linear_sub_index(c, 91, 120, 201, 300)
    elif c <= 250:
        return linear_sub_index(c, 121, 250, 301, 400)
    else:
        return linear_sub_index(c, 251, 500, 401, 500)


def pm10_aqi(c):
    if c <= 50:
        return linear_sub_index(c, 0, 50, 0, 50)
    elif c <= 100:
        return linear_sub_index(c, 51, 100, 51, 100)
    elif c <= 250:
        return linear_sub_index(c, 101, 250, 101, 200)
    elif c <= 350:
        return linear_sub_index(c, 251, 350, 201, 300)
    elif c <= 430:
        return linear_sub_index(c, 351, 430, 301, 400)
    else:
        return linear_sub_index(c, 431, 600, 401, 500)
def no2_aqi(c):
    if c <= 40:
        return linear_sub_index(c, 0, 40, 0, 50)
    elif c <= 80:
        return linear_sub_index(c, 41, 80, 51, 100)
    elif c <= 180:
        return linear_sub_index(c, 81, 180, 101, 200)
    elif c <= 280:
        return linear_sub_index(c, 181, 280, 201, 300)
    elif c <= 400:
        return linear_sub_index(c, 281, 400, 301, 400)
    else:
        return linear_sub_index(c, 401, 1000, 401, 500)


def so2_aqi(c):
    if c <= 40:
        return linear_sub_index(c, 0, 40, 0, 50)
    elif c <= 80:
        return linear_sub_index(c, 41, 80, 51, 100)
    elif c <= 380:
        return linear_sub_index(c, 81, 380, 101, 200)
    elif c <= 800:
        return linear_sub_index(c, 381, 800, 201, 300)
    elif c <= 1600:
        return linear_sub_index(c, 801, 1600, 301, 400)
    else:
        return linear_sub_index(c, 1601, 2000, 401, 500)


def co_aqi(c):
    if c <= 1:
        return linear_sub_index(c, 0, 1, 0, 50)
    elif c <= 2:
        return linear_sub_index(c, 1.1, 2, 51, 100)
    elif c <= 10:
        return linear_sub_index(c, 2.1, 10, 101, 200)
    elif c <= 17:
        return linear_sub_index(c, 10.1, 17, 201, 300)
    elif c <= 34:
        return linear_sub_index(c, 17.1, 34, 301, 400)
    else:
        return linear_sub_index(c, 34.1, 50, 401, 500)


def ozone_aqi(c):
    if c <= 50:
        return linear_sub_index(c, 0, 50, 0, 50)
    elif c <= 100:
        return linear_sub_index(c, 51, 100, 51, 100)
    elif c <= 168:
        return linear_sub_index(c, 101, 168, 101, 200)
    elif c <= 208:
        return linear_sub_index(c, 169, 208, 201, 300)
    elif c <= 748:
        return linear_sub_index(c, 209, 748, 301, 400)
    else:
        return linear_sub_index(c, 749, 1000, 401, 500)


def nh3_aqi(c):
    if c <= 200:
        return linear_sub_index(c, 0, 200, 0, 50)
    elif c <= 400:
        return linear_sub_index(c, 201, 400, 51, 100)
    elif c <= 800:
        return linear_sub_index(c, 401, 800, 101, 200)
    elif c <= 1200:
        return linear_sub_index(c, 801, 1200, 201, 300)
    elif c <= 1800:
        return linear_sub_index(c, 1201, 1800, 301, 400)
    else:
        return linear_sub_index(c, 1801, 2000, 401, 500)