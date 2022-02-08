import { Module } from '@lastui/rocker/platform'

const Fibonacci = () => (
  <div>
    <p>
      Fibonacci number of 8 is <Module name='fibonacci' ofNumber={8} />
    </p>
    <p>
      Fibonacci number of "nothing" is <Module name='fibonacci' />
      <span className='note'>
        (no <code>props</code> are passed)
      </span>
    </p>
  </div>
)

export default Fibonacci
