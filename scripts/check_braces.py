
filename = 'c:/Users/rajan/.gemini/antigravity/scratch/portfolio-project/app/globals.css'

with open(filename, 'r') as f:
    lines = f.readlines()

stack = []
for i, line in enumerate(lines):
    for char in line:
        if char == '{':
            stack.append(i + 1)
        elif char == '}':
            if not stack:
                print(f"Error: Extra closing brace at line {i + 1}")
            else:
                stack.pop()

if stack:
    print(f"Error: Unclosed brace starting at line {stack[-1]}")
else:
    print("Success: Braces are balanced.")
