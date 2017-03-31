/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import ReactTestUtils from 'react-addons-test-utils'
import sinon from 'sinon'
import ImgFallback from './core'

const requiredProps = { fallback: <div className="FALLBACK" /> }

const component = (props) => {
  return renderer.create(
    <ImgFallback {...requiredProps} {...props} />,
  )
}


const snap = (props, Component) => {
  const c = Component ? renderer.create(Component) : component(props)
  const tree = c.toJSON()
  expect(tree).toMatchSnapshot()
}

describe('ImgFallback', () => {
  describe('graphical (JSX)', () => {
    it('should have a default behaviour with required props', () => snap({}))
    it('should add custom className', () => snap({ className: 'custom' }))
    it('should add custom style', () => snap({ style: { backgroundColor: 'red' } }))
    it('should add source', () => snap({ src: 'SOURCE_URL' }))
    it('should show an error log if required props is missing', () => {
      const stub = sinon.stub(console, 'error')
      snap({}, <ImgFallback src={'SOURCE_URL'} />)
      expect(stub.calledOnce).toEqual(true)
    })
    it('should print fallback when image is on error', () => {
      const rendered = ReactTestUtils.renderIntoDocument(<ImgFallback src={'SOURCE_URL'} {...requiredProps} />)
      let img = ReactTestUtils.findRenderedDOMComponentWithTag(rendered, 'img')
      let fallback = ReactTestUtils.scryRenderedDOMComponentsWithClass(rendered, 'FALLBACK')
      expect(img).toBeDefined()
      expect(fallback).toHaveLength(0)

      // Fake error
      ReactTestUtils.Simulate.error(img)

      // Image is not printed anymore, icon is
      img = ReactTestUtils.scryRenderedDOMComponentsWithTag(rendered, 'img')
      fallback = ReactTestUtils.findRenderedDOMComponentWithClass(rendered, 'FALLBACK')
      expect(img).toHaveLength(0)
      expect(fallback).toBeDefined()
    })
  })
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
