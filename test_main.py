def add(a, b):
    return a + b

def test_addition():
    result = add(2, 3)
    expected_result = 5
    assert result == expected_result, f"Ожидалось {expected_result}, получилось {result}"