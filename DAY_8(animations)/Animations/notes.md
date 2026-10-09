

# CSS Animations

To animate CSS elements, use the `@keyframes` rule:

```css
@keyframes myName {
  from {
    font-size: 20px;
  }
  to {
    font-size: 40px;
  }
}

```

---

## Key Animation Properties

* `animation-name`
* `animation-duration`
* `animation-timing-function`
* `animation-delay`
* `animation-iteration-count`
* `animation-direction`
* `animation-fill-mode`

---

## Using Percentages in `@keyframes`

You can use percentage values (`0%` to `100%`) to create multi-step animations:

```css
@keyframes myName {
  0% {
    font-size: 20px;
  }
  50% {
    font-size: 30px;
  }
  100% {
    font-size: 40px;
  }
}

```

---

## Example Usage

Apply the animation to an element:

```css
.target-element {
  animation-name: myName;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

```

```

---

